import {
  Tabs,
  TabsPanel,
  TabsList,
  TabsTrigger,
  Grid,
  PostCard,
  Avatar,
  Button,
} from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { Paths } from '../constants.ts';
import { useQuery } from '@apollo/client';
import { IPost, IProfile, PaginationParams } from '../types';
import { GET_PROFILE, GET_USER_POSTS } from '../lib';
import { Fragment } from 'react';

interface GetPostsQueryModel {
  total: number;
  limit: number;
  skip: number;
  items: IPost[];
}

interface UserPostsVariables extends PaginationParams {
  id: number;
}

function Posts({ owner }: { owner: IProfile }) {
  const params = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<
    { userPosts: GetPostsQueryModel },
    UserPostsVariables
  >(GET_USER_POSTS, {
    variables: {
      id: parseInt(params.id || '-1'),
      limit: 10,
      skip: 0,
    },
  });

  if (!params.id) {
    navigate(Paths.Root);
  }

  if (error) {
    return <div className='error'>{error.message}</div>;
  }

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Fragment>
      {data && data.userPosts.total > 0 ? (
        <Grid cols={3}>
          {data.userPosts.items.map((item) => (
            <PostCard key={item.id} data={item} owner={owner} />
          ))}
        </Grid>
      ) : (
        <span className='text-base-400 font-size-2'>
          No posts at the moment
        </span>
      )}
    </Fragment>
  );
}

/**
 * A page component that renders components for the user page.
 */
function ProfilePage() {
  const params = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery<
    {
      profile: IProfile;
    },
    { id: number }
  >(GET_PROFILE, { variables: { id: parseInt(params.id || '-1') } });

  if (!params.id) {
    navigate(Paths.Root);
  }

  if (error) {
    return <div className='error'>{error.message}</div>;
  }

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <Fragment>
      {data && (
        <div className='mt-2 v-stack gap-5'>
          <div className='v-stack gap-3'>
            <Avatar
              size='lg'
              src={data.profile.image}
              name={data.profile.firstName}
            />
            <div className='h-stack justify-content-between align-items-center'>
              <div className='v-stack'>
                <span className='font-size-5 font-weight-600'>
                  {data.profile.firstName}
                </span>
                <span className='text-base-400'>
                  @{data.profile.username}
                </span>
              </div>
              <Button>Logout</Button>
            </div>
          </div>
          <Tabs defaultValue='posts'>
            <TabsList>
              <TabsTrigger value='posts'>Posts</TabsTrigger>
              <TabsTrigger value='comments'>Comments</TabsTrigger>
            </TabsList>
            <TabsPanel value='posts'>
              <Posts owner={data.profile} />
            </TabsPanel>
            <TabsPanel value='comments'>
              <span className='text-base-400 font-size-2'>
                No comments at the moment
              </span>
            </TabsPanel>
          </Tabs>
        </div>
      )}
    </Fragment>
  );
}
ProfilePage.displayName = 'Profile Page';

export default ProfilePage;

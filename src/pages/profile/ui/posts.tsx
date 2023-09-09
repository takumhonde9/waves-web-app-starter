import { IProfile } from '../../../types';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_POSTS } from '../../../lib';
import { Paths } from '../../../constants.ts';
import { Fragment } from 'react';
import { Grid, PostCard } from '../../../components';
import { GetPostsQueryModel, UserPostsVariables } from '../types.ts';

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
Posts.displayName = 'Posts';

export default Posts;

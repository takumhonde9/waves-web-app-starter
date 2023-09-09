import { IProfile } from '../../../types';
import { useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@apollo/client';
import { GET_PROFILE } from '../../../lib';
import { Fragment } from 'react';
import {
  Avatar,
  Button,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTrigger,
} from '../../../components';
import Posts from './posts';

function Content() {
  const params = useParams();

  const { data } = useSuspenseQuery<
    {
      profile: IProfile;
    },
    { id: number }
  >(GET_PROFILE, { variables: { id: parseInt(params.id || '-1') } });

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
Content.displayName = 'Profile Content';

export default Content;

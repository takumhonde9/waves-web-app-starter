import styles from './styles.module.css';
import { PostCardProps } from './types.ts';
import Avatar from '../avatar';

function PostCard({ data, owner }: PostCardProps) {
  return (
    <div className={styles['post-card']}>
      <div className={styles['post-card--header']}>
        <div className={styles['post-card--profile']}>
          <Avatar src={owner.image} name={owner.firstName} />
          <div className={styles['post-card--profile-names']}>
            <span className='font-weight-600'>{owner.firstName}</span>
            <span className='font-size-2 text-base-400'>
              @{owner.username}
            </span>
          </div>
        </div>
        <div className={styles['post-card--tags']}>
          {data.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
      <div className={styles['post-card--body']}>
        <span>{data.title}</span>
        <span>{data.body}</span>
      </div>
      <div className={styles['post-card--footer']}>
        <p className={styles['post-card--reactions']}>
          <span>{data.reactions}</span> <span>reactions</span>
        </p>
      </div>
    </div>
  );
}
PostCard.displayName = 'Post Card';

export default PostCard;

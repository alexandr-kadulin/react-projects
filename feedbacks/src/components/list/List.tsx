import { TFeedback } from '../../types';

interface IList {
  feedbacks: TFeedback[];
}

export const List = ({ feedbacks }: IList) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">Feedbacks</h2>
      {feedbacks.length ? (
        feedbacks.map((feedback) => {
          const { email, rating, text } = feedback;

          return (
            <article key={email} className="border p-4 rounded mb-4">
              <div className="font-bold mb-2">{email}</div>
              <div className="text-yellow-500 mb-4">
                {'⭐'.repeat(Number(rating))}
              </div>
              <p>{text}</p>
            </article>
          );
        })
      ) : (
        <p className="">No feedbacks yet</p>
      )}
    </section>
  );
};

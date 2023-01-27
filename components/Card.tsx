import { CharacterEntityResponse } from '@/graphql/__generated__/graphql';

const Card = ({ data }: CharacterEntityResponse) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl">
      <h1 className="text-2xl font-bold">{`${data?.attributes?.name[0].toUpperCase()}${data?.attributes?.name
        .slice(1)
        .toLowerCase()}`}</h1>
      <span>
        Rarity:&nbsp;
        {data?.attributes?.rarerity === 'five_stars' ? '5 Stars' : '4 Stars'}
      </span>
      <p>{data?.attributes?.description}</p>
    </div>
  );
};

export default Card;

import { UisStar } from "@iconscout/react-unicons-solid";
export const StarRating = ({ data }) => {
  const NumberRating = () => {
    switch (data) {
      case 1:
        return <UisStar className="text-star h-4 w-4" />;
      case 2:
        return (
          <>
            <UisStar className="text-star h-4 w-4" />
            <UisStar className="text-star h-4 w-4" />
          </>
        );
      case 3:
        return (
          <>
            <UisStar className="text-star h-4 w-4" />
            <UisStar className="text-star h-4 w-4" />
            <UisStar className="text-star h-4 w-4" />
          </>
        );
      case 4:
        return (
          <>
            <UisStar className="text-star h-4 w-4" />
            <UisStar className="text-star h-4 w-4" />
            <UisStar className="text-star h-4 w-4" />
            <UisStar className="text-star h-4 w-4" />
          </>
        );
      case 5:
        return (
          <>
            <UisStar className="text-star h-4 w-4" />
            <UisStar className="text-star h-4 w-4" />
            <UisStar className="text-star h-4 w-4" />
            <UisStar className="text-star h-4 w-4" />
            <UisStar className="text-star h-4 w-4" />
          </>
        );
      default:
        return "foo";
    }
  };
  return (
    <>
      <NumberRating />
    </>
  );
};

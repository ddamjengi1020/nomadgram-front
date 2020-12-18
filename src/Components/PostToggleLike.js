import TextWeight from "./TextWeight";

export default ({ likes, isLiked, userName }) => {
  return isLiked ? (
    likes.length >= 2 ? (
      <>
        <TextWeight>Liked by</TextWeight>{" "}
        {likes?.map(
          (like, idx) =>
            idx === 0 && (
              <TextWeight key={like.id} weight={"border"}>
                {like.user.userName}
              </TextWeight>
            )
        )}{" "}
        <TextWeight>and</TextWeight>{" "}
        <TextWeight weight={"border"}>other</TextWeight>
      </>
    ) : likes.length === 1 ? (
      likes?.some((like) => like.user.userName === userName) ? (
        <>
          <TextWeight>Liked by</TextWeight>{" "}
          {likes?.map(
            (like, idx) =>
              idx === 0 && (
                <TextWeight key={like.id} weight={"border"}>
                  {like.user.userName}
                </TextWeight>
              )
          )}{" "}
        </>
      ) : (
        <>
          <TextWeight>Liked by</TextWeight>{" "}
          {likes?.map(
            (like, idx) =>
              idx === 0 && (
                <TextWeight key={like.id} weight={"border"}>
                  {like.user.userName}
                </TextWeight>
              )
          )}{" "}
          <TextWeight>and</TextWeight>{" "}
          <TextWeight weight={"border"}>other</TextWeight>
        </>
      )
    ) : (
      <>
        <TextWeight>Liked by</TextWeight>{" "}
        <TextWeight weight={"border"}>{userName}</TextWeight>{" "}
      </>
    )
  ) : likes.length > 2 ? (
    <>
      <TextWeight>Liked by</TextWeight>{" "}
      {likes?.map(
        (like, idx) =>
          idx === 0 && (
            <TextWeight key={like.id} weight={"border"}>
              {like.user.userName}
            </TextWeight>
          )
      )}{" "}
      <TextWeight>and</TextWeight>{" "}
      <TextWeight weight={"border"}>other</TextWeight>
    </>
  ) : likes.length === 2 ? (
    // 여기서부터 isliked === false
    <>
      <TextWeight>Liked by</TextWeight>{" "}
      {likes?.map(
        (like, idx) =>
          idx === 0 && (
            <TextWeight key={like.id} weight={"border"}>
              {like.user.userName}
            </TextWeight>
          )
      )}{" "}
      {!likes?.some((like) => like.user.userName === userName) && (
        <>
          <TextWeight>and</TextWeight>{" "}
          <TextWeight weight={"border"}>other</TextWeight>
        </>
      )}
    </>
  ) : likes.length === 1 ? (
    !likes?.some((like) => like.user.userName === userName) && (
      <>
        <TextWeight>Liked by</TextWeight>{" "}
        {likes?.map(
          (like, idx) =>
            idx === 0 && (
              <TextWeight key={like.id} weight={"border"}>
                {like.user.userName}
              </TextWeight>
            )
        )}{" "}
      </>
    )
  ) : null;
};

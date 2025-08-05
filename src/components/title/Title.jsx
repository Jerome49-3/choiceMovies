const Title = (props) => {
  const { title, classTxt } = props;
  return (
    <>
      <div className={classTxt}>
        <p>{title}</p>
      </div>
    </>
  );
};

export default Title;

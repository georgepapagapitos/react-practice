import cat from '../../images/cat.jpg';

export default function Card() {
  return (
    <div>
      <img style={{ width: "15rem" }} src={cat} alt="cat" />
      <div>
        <p>cute cat</p>
        <p>Cats</p>
        <a href="/cats">more info</a>
      </div>
    </div>
  );
};
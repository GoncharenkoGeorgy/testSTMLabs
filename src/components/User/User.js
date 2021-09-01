import React from 'react';
import '../Users/Users.css';

function Post(props) {

  const { result } = props;

  const reformattedDate = result.registered.date.slice(0, 10);
  const year = reformattedDate.slice(0, 4);
  const day = reformattedDate.slice(8, 10);
  const month = reformattedDate.slice(5, 7);

  const date = new Date(result.registered.date);

  const [over, setOver] = React.useState(false);

  function openTooltip() {
    setOver(true);
  }

  function closeTooltip() {
    setOver(false);
  }

  return (
    <tr className='users__row'>
      <td className='users__content_slot'>{result.name.first} {result.name.last}</td>
      <td className='users__content_slot'>
        <img className='users__content_picture' src={result.picture.thumbnail} alt='avatar' onMouseOut={closeTooltip} onMouseOver={openTooltip} />
        <img className={`${over ? 'users__content_picture_hover' : 'users__content_picture_hovertwo'}`} src={result.picture.large} alt='avatar' />
      </td>
      <td className='users__content_slot'>{result.location.state} {result.location.city}</td>
      <td className='users__content_slot'>{result.email}</td>
      <td className='users__content_slot'>{result.phone}</td>
      <td className='users__content_slot'>{day}.{month}.{year}</td>
    </tr>
  );
}

export default Post;
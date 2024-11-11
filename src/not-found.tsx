import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h1>404. <br /> Page Not Found</h1>
      <Link to='/'>Back to main page</Link>
    </>
  );
}

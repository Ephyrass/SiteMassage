import Link from "next/link";

function Layout({ children }) {
  return (
    <div>
      <header>
        <div className='logo'>
          <Link href='/'>
            <img src='/leaf.svg' alt='Logo du site' />
          </Link>
          <p>
            <strong>Chihiro Massage</strong> <br />
            <em>Massage à domicile</em>
          </p>
          <p></p>
        </div>
        <nav>
          <ul>
            <Link href='/massage'>
              <li>Massages</li>
            </Link>
            <Link href='/tarif'>
              <a>
                <li>Tarifs</li>
              </a>
            </Link>
            <Link href='/form'>
              <a>
                <li>Contact & Rendez-vous</li>
              </a>
            </Link>
          </ul>
        </nav>
      </header>
      {children}
    </div>
  );
}

export default Layout;

import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>
                        Bulma
                    </strong>
                    by
                    <Link href="https://jgthms.com">
                        Jeremy Thomas</Link>.
                    The source code is licensed
                    <Link to="http://opensource.org/licenses/mit-license.php">
                        MIT
                    </Link>.
                    The website content
                    is licensed <Link href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</Link>.
                </p>
            </div>
        </footer>
    )
}

export default Footer;

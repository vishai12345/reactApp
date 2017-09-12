import React, { Component } from 'react';
import '../App.css';
class Footer extends Component {
   render() {
      return (
			<div className='Footer'>
				 <footer className="bd-footer text-muted">
				  <div className="container">
				    <p>Designed and built with all the love in the world by <a href="https://twitter.com/mdo" target="_blank">@mdo</a> and <a href="https://twitter.com/fat" target="_blank">@fat</a>. Maintained by the <a href="https://github.com/orgs/twbs/people">core team</a> with the help of <a href="https://github.com/twbs/bootstrap/graphs/contributors">our contributors</a>.</p>
				    <p>Currently v4.0.0-alpha.6. Code licensed <a rel="license" href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank">MIT</a>, docs <a rel="license" href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a>.</p>
				  </div>
				</footer>
			</div>
      )
   }
}

export default Footer;
import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Tabs from "../components/tabs"
import { StaticImage } from "gatsby-plugin-image"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <Link to="/">Go back to the homepage</Link>
    <div className="tabs-section">
     <Tabs> 
        <div label="Web" className="tabs"> 
            <div className="tab-1">
                <div className="tab-item" >
                    <h6>Languages</h6>
                    <div className="langIcon">
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/c.png" alt="icon" placeholder="tracedSVG"/>
                        <p>C#</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/ruby.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Ruby</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/ts.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Typescript</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/php.png" alt="icon" placeholder="tracedSVG"/>
                        <p>PHP</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/javascript.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Javascript</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/python.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Pyton</p>
                    </div>
                    </div>
                </div>
                <div className="tab-item">
                    <h6>Frameworks</h6>
                    <div className="langIcon">
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/angularjs.png" alt="icon" placeholder="tracedSVG"/>
                            <p>Angular</p>
                        </div>
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/ruby_on_rails.png" alt="icon" placeholder="tracedSVG"/>
                            <p>Ruby on rails</p>
                        </div>
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/atom.png" alt="icon" placeholder="tracedSVG"/>
                            <p>React</p>
                        </div>
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/mvc.png" alt="icon" placeholder="tracedSVG"/>
                            <p>ASP.net MVC</p>
                        </div>
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/nodejs.png" alt="icon" placeholder="tracedSVG"/>
                            <p>NodeJS</p>
                        </div>
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/laravel.png" alt="icon" placeholder="tracedSVG"/>
                            <p>Laravel</p>
                        </div>
                    </div>
                </div>
                <div className="tab-item">
                    <h6>Detebase</h6>
                    <div className="langIcon">
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/redis.png" alt="icon" placeholder="tracedSVG"/>
                            <p>Redis</p>
                        </div>
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/elasticsearch.png" alt="icon" placeholder="tracedSVG"/>
                            <p>Elasticsearch</p>
                        </div>
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/mongodb.png" alt="icon" placeholder="tracedSVG"/>
                            <p>MongoDB</p>
                        </div>
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/postgresql.png" alt="icon" placeholder="tracedSVG"/>
                            <p>PostgreSQL</p>
                        </div>
                        <div className="lang-icon">
                            <StaticImage src="../images/tab-images/mysql.png" alt="icon" placeholder="tracedSVG"/>
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                <div className="tab-item">
                    <h6>CMS</h6>
                    <div className="langIcon">
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/wordpress.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Wordpress</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/magento.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Magento</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/woocommerce.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Woocommerce</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/joomla.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Joomla</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/shopify.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Shopify</p>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
        <div label="Mobile"> 
            <div className="tab-1">
            <div className="tab-item">
                    <h6>Languages</h6>
                    <div className="langIcon">
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/c.png" alt="icon" placeholder="tracedSVG"/>
                        <p>C#</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/ruby.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Ruby</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/ts.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Typescript</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/php.png" alt="icon" placeholder="tracedSVG"/>
                        <p>PHP</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/javascript.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Javascript</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/python.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Pyton</p>
                    </div>
                    </div>
                </div>
                <div className="tab-item">
                    <h6>Frameworks</h6>
                    <div className="langIcon">
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/angularjs.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Angular</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/ruby_on_rails.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Ruby on rails</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/atom.png" alt="icon" placeholder="tracedSVG"/>
                        <p>React</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/mvc.png" alt="icon" placeholder="tracedSVG"/>
                        <p>ASP.net MVC</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/nodejs.png" alt="icon" placeholder="tracedSVG"/>
                        <p>NodeJS</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/laravel.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Laravel</p>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
     </Tabs>
     <div className="test-transform">
         <div className="transform"></div>
     </div>
     </div>
  </Layout>
)

export default SecondPage

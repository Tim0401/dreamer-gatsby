import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { CategoryQuery, StrapiCategoryEdge } from "../../types/graphql-types"

const Nav = () => (
    <div>
        <div>
            <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link to="/">Dreamer</Link>
                        </li>
                    </ul>
                </div>

                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <StaticQuery
                            query={graphql`
                query {
                  allStrapiCategory {
                    edges {
                      node {
                        strapiId
                        name
                      }
                    }
                  }
                }
              `}
                            render={data =>
                                data.allStrapiCategory.edges.map((category: StrapiCategoryEdge, i: Number) => {
                                    return (
                                        <li key={category.node.strapiId}>
                                            <Link to={`/categories/${category.node.strapiId}`}>
                                                {category.node.name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        />
                    </ul>
                </div>
            </nav>
        </div>
    </div>
)

export default Nav
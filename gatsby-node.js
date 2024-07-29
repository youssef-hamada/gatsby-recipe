const  path  = require("path")





exports.createPages = async ({graphql,actions}) => {
    const {createPage} = actions

    const result = await graphql(`
         query getRqcipes {
            allContentfulGatsbyRecipe {
                nodes {
                    content {
                        tags
                    }
                }
            }
        }


    `)


    result.data.allContentfulGatsbyRecipe.nodes.forEach((recipe) => {
        recipe.content.tags.forEach((tag) => {
            createPage({
                path:`/${tag}`,
                component:path.resolve(`src/template/tagTemplate.js`),
                context:{
                    tag:tag,
                }

            })
        } )
    })
} 
// import React from "react"
// import { Helmet } from "react-helmet"

// export const onRenderBody = (
//   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
//   pluginOptions
// ) => {
//   const helmet = Helmet.renderStatic()
//   setHtmlAttributes(helmet.htmlAttributes.toComponent())
//   setBodyAttributes(helmet.bodyAttributes.toComponent())
//   setHeadComponents([
//     helmet.title.toComponent(),
//     helmet.link.toComponent(),
//     helmet.meta.toComponent(),
//     helmet.noscript.toComponent(),
//     helmet.script.toComponent(),
//     helmet.style.toComponent()
//   ])
// }

exports.onPreRenderHTML = function onPreRenderHTML({
    getHeadComponents,
    replaceHeadComponents,
  }) {
    const headComponents = getHeadComponents();
    headComponents.sort((a, b) => {
      if (a.type === b.type || (a.type !== 'style' && b.type !== 'style')) {
        return 0;
      }
  
      if (a.type === 'style') {
        return 1;
      } else if (b.type === 'style') {
        return -1;
      }
  
      return 0;
    });

    headComponents.forEach(head => {
		if (head.props && head.props['data-react-helmet']) {
			delete head.props['data-react-helmet'];
		}
	});
  
    replaceHeadComponents(headComponents);
  };
// exports.onPreRenderHTML = ({ replaceHeadComponents, getHeadComponents }) => {
// 	const headComponents = getHeadComponents();
// 	console.log(headComponents);
// 	headComponents.forEach(head => {
// 		if (head.props && head.props['data-react-helmet']) {
// 			delete head.props['data-react-helmet'];
// 		}
// 	});
// 	replaceHeadComponents(headComponents);
// };
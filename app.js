const banner=document.querySelector('#page-banner')
console.log('#page-baner node type is:',banner.nodeType)
console.log("#page-baner node type is:", banner.nodeName);
console.log("#page-baner has child node:", banner.hasChildNodes());
const clonedBanner=banner.cloneNode(true);
console.log(clonedBanner);

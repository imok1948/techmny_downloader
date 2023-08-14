// function collectLinks(startingNo, totalLinks){
//     links = []
//     linkCount = 1
//     for(i = startingNo, linkCount = 1; linkCount <= totalLinks; i+=2, linkCount++){
//         console.log('Current => '+ i + ' Link Count => ' + linkCount);
//         links.push(document.querySelector(`#post-12364 > div > div.entry-content > div.timed-content-client_show_0_5_0 > h3:nth-child(${i}) > a`).href)
//     }
//     return links;
// }

// links = collectLinks(3, 13)

// links.forEach(function(link, index){
//     console.log(`${index} => ${link}`)
// })

div = document.querySelector("#post-12364 > div > div.entry-content > div.timed-content-client_show_0_5_0")
h3 = div.getElementsByTagName('h3')

for (i = 0; i < h3.length; i++) {
    try {
        console.log(`${i} => ${h3[i].getElementsByTagName('a')[0].href}`)
    } catch (e) {
        console.log(`Index ${i} => ` + e)
    }
}

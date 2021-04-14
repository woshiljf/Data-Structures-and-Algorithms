var url = 'https://www.nowcoder.com/discuss/636444?type=2&order=3&pos=2&page=0&channel=-1&source_id=discuss_tag_nctrack'



var reg = /[^?&]([^=&#]+)=([^&#]*)/g;
var f = url.match(reg);

console.log(f);
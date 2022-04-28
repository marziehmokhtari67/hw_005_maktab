let generation={
    '1':{m:'great grand father',f:'great grand mother'},
    '2':{m:'grand father',f:'grand  mother'},
    '3':{m:'father',f:'mother'},
    '0':{m:'me!',f:'me!'},
    '-1':{m:'son',f:'daughter'},
    '-2':{m:'grand son',f:'grand daughter'},
    '-3':{m:'great grand son',f:'great grand daughter'}
}
function finding(x,y){
    let X =x.toString()
  return generation[X][y]
}
 console.log(finding(-1,'m'))
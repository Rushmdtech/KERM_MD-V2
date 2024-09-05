const {
    smd,
    sleep
    } = require('../lib'),teddyM = {"smd" : "asta" }

smd({
    cmdname: "nithu",    
    type: "fun",    
    info: "cute teddy",   
    on: "text" ,
    filename: __filename,
    react: "🤪",
},async(citel,match , {smd}) => {
  let isteddy = smd ==="teddy"?true : citel.isPublic && match.toLowerCase().includes("teddy") ? true : ""       
      if (isteddy && !teddyM[citel.id]) {
      teddyM[citel.id] =true;
      let teddy = ['H', 'i', 'i', 'a', 'm', 'q', 'e', 'e', 'n', 'n', 'i', 't', 'u', '💓', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈']
      const { key } = await citel.reply( `(\\_/)\n( •.•)\n/>🤍`)
      for (let i = 0; i < teddy.length; i++) {
        await sleep(500);
        await citel.reply(`(\\_/)\n( •.•)\n/>${teddy[i]}`, { edit: key })             
      } 
    }

})

const message = {
    jokes: {
        type: 'Joke',
        content: []
    },

    quotes: {
        type: 'Quote',
        content: []
    },

    ads: {
        type: 'Advertisement',
        content: []
    },

    contentFill(type, content){
        type.toLoweCase();
        if(type === 'joke'){
            return this.jokes.content.push(content);
        }else if(type === 'quote'){
            return this.quotes.content.push(content);
        }else if(type === 'advertisement'){
            return this.ads.content.push(content);
        }else{
            return `Wrong "type" entered!`
        }
    }
}

console.log(message.ads.type);
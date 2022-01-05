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
        type.toLowerCase();
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

message.contentFill('joke', `Did you hear about the mathematician who’s afraid of negative numbers?\nHe’ll stop at nothing to avoid them.`);
message.contentFill('joke', `What’s the best thing about Switzerland?\nI don’t know, but the flag is a big plus.`);
message.contentFill('joke', `I invented a new word!\nPlagiarism!`);
message.contentFill('quote', `Great things in business are never done by one person. They're done by a team of people.`);
message.contentFill('quote', `Design is not just what it looks like and feels like. Design is how it works.`);
message.contentFill('quote', `Stay hungry, stay foolish.`);
message.contentFill('advertisement', `Privacy. That's iPhone.`);
message.contentFill('advertisement', `It doesn't take a genius.`);
message.contentFill('advertisement', `Brilliant. In every way.`);


console.log(message.jokes.content);
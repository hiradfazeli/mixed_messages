const message = {
    jokes: {
        type: 'Joke',
        content: [
            `Did you hear about the mathematician who’s afraid of negative numbers?\nHe’ll stop at nothing to avoid them.`,
            `What’s the best thing about Switzerland?\nI don’t know, but the flag is a big plus.`,
            `I invented a new word!\nPlagiarism!`
        ]
    },

    quotes: {
        type: 'Quote',
        content: [
            `Great things in business are never done by one person. They're done by a team of people.`,
            `Design is not just what it looks like and feels like. Design is how it works.`,
            `Stay hungry, stay foolish.`
        ]
    },

    ads: {
        type: 'Advertisement',
        content: [
            `Privacy. That's iPhone.`,
            `It doesn't take a genius.`,
            `Brilliant. In every way.`
        ]
    }
}

// this function generates random numbers
const numGenerator = num =>{
    return Math.floor(Math.random()*num);
}

// type decision happens
const randomType = () => {
    const types = [];
    for(let prop in message){
        types.push((message[prop].type));
    }

    return types;
}

// final message which displays to the user
const randomMessage = () => {
    const types = randomType();
    const type = types[numGenerator(types.length)]
    if(type === 'Joke'){
        return message.jokes.content[numGenerator(message.jokes.content.length)] + `\n\nType of message: ${type}`;
    }else if(type === 'Quote'){
        return message.quotes.content[numGenerator(message.quotes.content.length)] + `\n\nType of message: ${type}`;
    }else{
        return message.ads.content[numGenerator(message.ads.content.length)] + `\n\nType of message: ${type}`;
    }
    
}



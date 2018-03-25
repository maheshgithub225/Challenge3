function init() {
	let token = "yL2bASk8Xk1ef0GuU4B7ONcN%2BxfHo32YhDmwWyInyjUapnyRcv8Q2bYf%2BnvuJcAVuwLYEqYN1lMafXASp7T4VlpMwIhAHJBF7AA%2Bf7URgQNLPgM%2B8Pzrm8c8Yi7UgaWUDBWHrB1NafXnNzqCMs5a2dqBZg3VBqCOf2kQ4YC2kzetg4l%2Fpsh1Jzzzp8KCmYvSKiuZ0tdgTyl3O2o5TkS85PoQ7pZ5j6kzCH2gU6PJp9EkZHDZAbEZ57UpkKv2OQ1N97dA5vcYEcVeBC2mw14GnLzIxFv9uDJtelhCNTzPxNZl3wkr7eotEFR1fRJH8ziVDyyL11S8%2BZg9%2F4qIuLv4VsCdrR2dQQaYI3sjxH5d7pxrbHdwtqo9hwqxWuNtvTH8MUN7av%2FvAdDmPQ%2FOMkm0i%2BkPx%2BDiuwqh80GNN7xq5Kl2f0lQ5yCcjnjoL%2BSXvTxNns0UKzo1YCjpP5rSBEChgnnQZ6YS5CjvadIbgYwhJ4BFmviMNgQ763CELaku4EgpqJqPOu88XdmnPGRdqro1drOv9AmSkEQ15auiyBEfdxAY3McPsI3Mg8EM6LdEojiMbWfikKJB0JVR02Fzlw2OULbI4nLdXTTxuG7JbiQ7jvCtyakbVFw5iCUFmUAgew57EdQYMlHkUNuDTkbB1XsY8kehObXKWM1TsHiwUf8PKS69dfbiw56mtKj8qa6nPKcOnbvXePot%2F%2BP%2BNHqhIpGVq3jKafznVpr64%2FHaktbKXZcEBBhcw1b6wvLZsaAd4jhjARrg7arMfZHZyngicSc46rrek0j9w7qf65vrwSibdIpISUVEtgj7kGbU09srrHTaWMWU%2BEMU1tcoEl0AzPgITIMmPH0lzveGnCnyYI7jzXMPL00C2hlsVk3KcKXdijh9R87%2F2FTnWcoufbYFI8TovZzRmO0sFQ5oSz2lM01aHcVJ%2F%2ByRpiUm5e74pDGhhNz5cjDsA376%2BZHkOdaKo2oigFOfFlDJGHbuRJS8N%2FsciNY%3D"
	let stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
		token: token,
		outputElement : "#display"
	});

	stream.on("error", err => {
		console.log("error: ", err);
	});

	document.getElementById('name').style.display = 'block';
	document.getElementById('challenge').style.display = 'none';
	document.getElementById('rating').style.display = 'none';
	document.getElementById('feedback').style.display = 'none';

	document.querySelector('#question2').onclick = function() {
		document.getElementById('name').style.display = 'none';
		document.getElementById('challenge').style.display = 'block';
		document.getElementById('rating').style.display = 'none';
		document.getElementById('feedback').style.display = 'none';
	};

	document.querySelector('#question3').onclick = function() {
		document.getElementById('name').style.display = 'none';
		document.getElementById('challenge').style.display = 'none';
		document.getElementById('rating').style.display = 'block';
		document.getElementById('feedback').style.display = 'none';
	};

	document.querySelector('#done').onclick = function() {
		document.getElementById('name').style.display = 'none';
		document.getElementById('challenge').style.display = 'none';
		document.getElementById('rating').style.display = 'none';
		document.getElementById('feedback').style.display = 'block';
		stream.stop();
	};
};

window.onload = init;



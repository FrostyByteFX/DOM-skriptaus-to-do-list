var tekstiKentta = document.getElementById('tekstikentta');//id tekstikentta viittaa html sivussa olevaan input kenttään, johon käyttäjä voi syöttää tekstiä.
var nappula = document.getElementById('lisaanappula');//nappula elementti tuodaan html:lästä, jotta voidaan myöhemmin javascriptissä tehdä eventListener nappulaan.
var tehtavaLista = document.getElementById('tehtavalista');//tehtavalista id on <div> elementti, jonka sisään uudet tehtävät luodaan.

nappula.addEventListener('click', function(){//tapahtuma kuuntelija, joka toimii vain kun sivustolla olevaa nappulaa add painetaan.
	if(tekstiKentta.value.length == 0) //tarkistaa onko tekstikenttä tyhjä nappulaa painaessa.
{
    alert("Tekstikenttä on tyhjä");
}else 
	if(tekstiKentta.value.length > 40)//tarkistaa onko tekstikentässä yli if ehdon antamaa merkkimäärää.
{
	alert("Tekstikenttässä on yli 40 merkkiä");
}else{
	var tausta = document.createElement('div');//luodaan tausta tekstille luo uuden <div></div> elementin.
	var teksti = document.createElement('p');//luodaan Paragraph elementti, jonne myöhemmin asetetaan teksti tekstikentästä.<p></p>
	var end = document.createElement('button');//luodaan nappula, jolla voidaan poistaa listasta elementti.<button></button>
		end.innerHTML = 'X'; //Luodaan X merkki nappulan sisälle.
		teksti.innerText = tekstiKentta.value;//sijoitetaan tekstikentän teksti uuteen teksti elementtiin eli <p> tagin sisään.
			tausta.classList.add('tausta-tyyli');//tausta hakee tyylin css tiedostosta, jossa class tausta-tyyli määrittää miltä tausta näyttää.
			teksti.classList.add('teksti-tyyli');//haetaan tyyli tekstille css tiedostosta.
			end.classList.add('nappula-tyyli');//nappulalle tyyli css tiedostosta, nappula jonka sisään kirjoitettiin X aikaisemmin.
		tehtavaLista.appendChild(tausta);//TehtavaLista on määritelty html sivulla ja sen sisälle laitetaan uusi luotu <div> elementti
		tausta.appendChild(teksti);//Teksti sijoitetaan uuden tausta eli <div> elementin sisään
		tausta.appendChild(end);//End eli nappula jolla poistetaan tehtävä listalta laitetaan taustan sisälle myös.
		tekstiKentta.value = '';//tyhjentää tekstikentän kun luodaan tehtävä listaan uusi elementti, jolloin käyttäjän ei tarvitse poistaa aijemmin kirjoitettua tekstiä.
	
teksti.addEventListener('click', function(){//funktio, joka lisää yliviivauksen tekstiin yhdellä klickkauksella tekstiä.
	teksti.style.textDecoration = 'line-through';
})

teksti.addEventListener('dblclick', function(){//funktio, joka poistaa yliviivauksen tekstiin kaksoisklikkauksella tekstiä.
	teksti.style.textDecoration = 'none';
})	
end.addEventListener('click', function(){//funktio jolla poistetaan tausta <div> elementti yhdellä klickkauksella aikaisemmin luotua <button> elementtiä.
	tehtavaLista.removeChild(tausta);//riittää vain kun poistaa tausta elementin eikä kaikkia kolmea elementtiä erikseen, jos poistaa kaikki kolme tulisi erroreita consoleen.
	})

}})



/* Operatory logiczne
Wynik działań logicznych to true lub false. Używając poniższych operatorów, możemy sprawdzić np. czy wartości są takie same.
Jeżeli warunek operacji logicznej jest spełniony, zwracany jest wynik true, w przeciwnym wypadku operacja zwraca false.*/

	/* Operator równości wartości ==    
	Sprawdza, czy wartości po obu stronach są równe lub takie same.
	*/
	
	/* Operator równości wartości i typu === 
	 Sprawdza, czy wartości po obu stronach są równe lub takie same. Oraz czy typ wartości jest ten sam.
	 */

	/* Operator różności  != */
	/*Sprawdza, czy wartości po obu stronach są różne. Odwrotność operatora równości.*/
	
	/* Operator większy niż > */
	/* Sprawdza, czy wartość po lewej stronie jest większa niż wartość po prawej.*/

	/* Operator mniejszy niż < */
	/* Sprawdza, czy wartość po lewej stronie jest mniejsza niż wartość po prawej.*/

	/* Operator większy lub równy >= */
	/* Sprawdza, czy wartość po lewej stronie jest większa od wartości po prawej lub jej równa.*/

	/* Operator mniejszy lub równy <= */
	/* Sprawdza, czy wartość po lewej stronie jest mniejsza od wartości po prawej lub jej równa.*/

	/* Operator negacji ! */
	/* Odwraca wartość logiczną zmiennej lub wyrażenia */

	/* Operatory logiczne wykorzystuje się najczęściej w instrukcjach warunkowych, o których więcej napiszemy nieco niżej.*/
	
	/*Przykładowe zadanie
Wyobraź sobie, że mamy za zadanie stworzyć samemu element, który będzie wyświetlał zakładki - jeden element naraz, zależnie od wybranej wartości.
Jednym ze sposobów na osiągnięcie takiego rezultatu jest skorzystanie z instrukcji warunkowej.*/

var selectedTab = "comments";

if (selectedTab == "details") {
	console.log("You selected details tab");}
else if (selectedTab == "comments") {
	console.log("You selected comments tab");
}  else {
	console.log("You selected contact tab.");
}

/*Switch
Jest bardzo podobny w działaniu do instrukcji if. Jednak switch przyjmuje wartość, a następnie porównuje ją z poszczególnymi przypadkami (case). Jeżeli nie uda się dopasować wartości do żadnej opcji, uruchamiane jest domyślne zachowanie default (odpowiednik else).
Załóżmy, że chcemy spytać użytkownika, czy lubi truskawki*/

var question = prompt("Czy lubisz truskawki");
switch (question.toLowerCase()) {
	case 'yes':
		alert('Great, me too');
		break;
	case 'no':
		alert('really?');
		break;
	default:
		alert("You didn't give a clear answer, so you're propably still wondering.");
}

/*Przykładowe zadanie
Powiedzmy, że mamy 3 przyciski na stronie.
Jeśli klikniemy pierwszy, to trzeba zmienić kolor strony, zagrać melodyjkę i wyświetlić wiadomość.
Jeśli drugi - zagrać melodyjkę i wyświetlić wiadomość, a jeśli trzeci - tylko wyświetlić wiadomość.*/

var buttonNumber = 1;

switch (buttonNumber) {
	case 1:
		console.log('Change the color of the page')
	case 2: 
		console.log('Play the tune');
	case 3:
		console.log('Display message');
	default:
		console.log('This case was made because there is no break');
}

/*Short if*/

/*Mamy możliwość korzystania ze skróconej wersji instrukcji if/else.*/

/*  (condition) ? code_if_condition_is_true : code_if_condition_is_false   */


/*Po lewej stronie znaku ? zostaje zapisany warunek instrukcji, a po prawej możliwe scenariusze, które są zależne od wartości warunku.
Po lewej stronie znaku : zapisujemy kod, który zostanie wykonany w przypadku spełnienia warunku, a po prawej kod, który będzie wykonany w przeciwnym wypadku. Są tutaj tylko dwie możliwości - true lub false.*/

var a = 7,
	b = 10;

var whatIsBigger = a > b ? 'Variable a is bigger' : 'Variable b is bigger';
console.log(whatIsBigger);



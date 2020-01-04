var hlavni_sila_var = 1;
var hlavni_stroj_var = 0;
var hlavni_interval_var = 1000; // v milisekundach


function hlavni_autoprirustek_penizku_f() {
    let aktualni_penizky_var = parseInt(document.getElementById("penizky_id").innerText);
    aktualni_penizky_var = aktualni_penizky_var + hlavni_stroj_var;
    document.getElementById("penizky_id").innerText = aktualni_penizky_var;
}

setInterval(() => {
    hlavni_autoprirustek_penizku_f();
}, hlavni_interval_var);

function rucne_zvysuj_penizky_f() {
    let aktualni_penizky_var = parseInt(document.getElementById("penizky_id").innerText);
    aktualni_penizky_var = aktualni_penizky_var + hlavni_sila_var;
    document.getElementById("penizky_id").innerText = aktualni_penizky_var;
}

function kup_hlavni_silu_f() {
    hlavni_sila_var = hlavni_sila_var + 1;
    document.getElementById('tlacitko_prace_id').innerText = `Zvyš o ${hlavni_sila_var}`;
    document.getElementById("tlacitko_kup_hlavni_silu_id").style.color = "red";
}

let cena_stroje_var = 100;

function kup_hlavni_stroj_f() {
    let aktualni_penizky_var = parseInt(document.getElementById("penizky_id").innerText);
    if (aktualni_penizky_var >= cena_stroje_var) {
        aktualni_penizky_var = aktualni_penizky_var - cena_stroje_var;
        document.getElementById("penizky_id").innerText = aktualni_penizky_var;
        hlavni_stroj_var = hlavni_stroj_var + 1;
        document.getElementById('sila_stroje_id').innerHTML = hlavni_stroj_var;
        cena_stroje_var = (1.2 * cena_stroje_var);
        document.getElementById("tlacitko_kup_hlavni_stroj_id").style.color = "red";
        document.getElementById('nemas_penize_zprava_id').innerText = '';
    } else {
        document.getElementById('nemas_penize_zprava_id').innerText =
            ` Ještě nemáš dostatek penízků (${cena_stroje_var})`;
    }
}

function uprava_penizku_f() {
    let uprava_penizku_var = parseInt(document.getElementById('uprava_penizku_input_id').value);
    document.getElementById('penizky_id').innerText = uprava_penizku_var;
}
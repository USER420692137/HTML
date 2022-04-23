var BosNumber = 0;

var HpCount = 1000;
var HpDelater = 120;
var NextHp = 1000

var CashCount = 0;
var CashPlus = 200;

var CenaZakupBooster1 = 5000;
var iloscBooster = 0;

var CashBoosterIncome1 = 1000;

var AttackBoost1 = 3000;

var x = 400;

var IloscMagi = 0;
var DodatekMagi = 1000;

function HpDelating() {
    HpCount = HpCount - HpDelater;
    CashCount = CashCount + CashPlus;

    if (HpCount <= 0) {
        HpCount = 0;

        var BackGroundBos = document.getElementById("BackGroundBos");
        BackGroundBos.style.visibility = "visible";
        BosNumber++;
        document.getElementById("BosNumber").innerHTML = BosNumber;

        IloscMagi = IloscMagi + DodatekMagi;
        DodatekMagi = DodatekMagi * 2;


        document.getElementById("HpCount").innerHTML = HpCount;
        document.getElementById("IloscMagi").innerHTML = IloscMagi;
        document.getElementById("DodatekMagi").innerHTML = DodatekMagi;
    }
    document.getElementById("HpCount").innerHTML = HpCount;
    document.getElementById("kasz").innerHTML = CashCount;
}

function Hidden() {
    BackGroundBos.style.visibility = "hidden";
    HpCount = NextHp * 2;
    NextHp = NextHp * 2;

    document.getElementById("HpCount").innerHTML = HpCount;
}

function Zakup() {
    if (IloscMagi >= CenaZakupBooster1) {
        IloscMagi = IloscMagi - CenaZakupBooster1;

        document.getElementById("IloscMagi").innerHTML = IloscMagi;
        var BosterJeden = document.getElementById("wybierzBoster4");
        BosterJeden.style.visibility = "hidden";


        var palka = document.getElementById("Horny");
        palka.style.visibility = "visible";

        iloscBooster = iloscBooster + 1;

        HpDelater = HpDelater + AttackBoost1;

        var Brak1 = document.getElementById("BrakBoostera1");
        Brak1.style.visibility = "hidden";

    }
}
var CenaZakupuDwa = 20000;

function SWAGG() {
    if (IloscMagi >= CenaZakupuDwa) {
        IloscMagi = IloscMagi - CenaZakupuDwa;

        document.getElementById("IloscMagi").innerHTML = IloscMagi;
        console.log("Susy");

        var BrakBoostera2 = document.getElementById("BrakBoostera2");
        BrakBoostera2.style.visibility = "hidden";

        var HornyDwa = document.getElementById("Swag");
        HornyDwa.style.visibility = "visible";

        var wybierzBoster = document.getElementById("wybierzBoster");
        wybierzBoster.style.visibility = "hidden";

        setInterval(function() {
            HpCount = HpCount - 10000;

            console.log("raz");

            document.getElementById("HpCount").innerHTML = HpCount;

            if (HpCount <= 0) {
                HpCount = 0;

                var BackGroundBos = document.getElementById("BackGroundBos");
                BackGroundBos.style.visibility = "visible";
                BosNumber++;
                document.getElementById("BosNumber").innerHTML = BosNumber;

                IloscMagi = IloscMagi + DodatekMagi;
                DodatekMagi = DodatekMagi * 2;

                document.getElementById("HpCount").innerHTML = HpCount;
                document.getElementById("IloscMagi").innerHTML = IloscMagi;
                document.getElementById("DodatekMagi").innerHTML = DodatekMagi;
            }
        }, 10000)
    }
}

var DogeCoinPrice = 100000;

function DOGEBUY() {
    if (IloscMagi >= DogeCoinPrice) {
        IloscMagi = IloscMagi - DogeCoinPrice;

        var BrakBoostera3 = document.getElementById("BrakBoostera3");
        BrakBoostera3.style.visibility = "hidden";

        var Horny2 = document.getElementById("Horny2");
        Horny2.style.visibility = "visible";

        var wybierzBoster2 = document.getElementById("wybierzBoster2");
        wybierzBoster2.style.visibility = "hidden";

        document.getElementById("IloscMagi").innerHTML = IloscMagi;
        HpDelater = HpDelater + 50000;
    }
}

var IloscMiniDog = 0;
var MiniDogKoszt = 500;

var BonusSlotJeden = 100;

function BuySlotJeden() {
    if (CashCount >= MiniDogKoszt) {
        CashCount = CashCount - MiniDogKoszt;
        document.getElementById("kasz").innerHTML = CashCount;

        IloscMiniDog = IloscMiniDog + 1;
        document.getElementById("IloscMiniDog").innerHTML = IloscMiniDog;

        HpDelater = HpDelater + BonusSlotJeden;

    }
}

function SellSlotJeden() {
    if (IloscMiniDog >= 1) {
        IloscMiniDog = IloscMiniDog - 1;
        document.getElementById("IloscMiniDog").innerHTML = IloscMiniDog;

        CashCount = CashCount + MiniDogKoszt;
        document.getElementById("kasz").innerHTML = CashCount;

        HpDelater = HpDelater - BonusSlotJeden;
    }
}


var IloscMiner = 0;
var MinerKoszt = 2000;

var BonusSlotDwa = 100;

function BuyDwa() {
    if (CashCount >= MinerKoszt) {
        CashCount = CashCount - MinerKoszt;
        document.getElementById("kasz").innerHTML = CashCount;

        IloscMiner = IloscMiner + 1;
        document.getElementById("IloscMiner").innerHTML = IloscMiner;

        CashPlus = CashPlus + BonusSlotDwa

    }
}

function SellDwa() {
    if (IloscMiniDog >= 1) {
        IloscMiner = IloscMiner - 1;
        document.getElementById("IloscMiner").innerHTML = IloscMiner;

        CashCount = CashCount + MinerKoszt;
        document.getElementById("kasz").innerHTML = CashCount;

        CashPlus = CashPlus - BonusSlotDwa
    }
}

var IloscBonaParte = 0;
var BonaparteKoszt = 10000;

var BonusSlotTrzy = 2000;


function SellTrzy() {
    if (IloscMiniDog >= 1) {
        IloscMiner = IloscMiner - 1;
        document.getElementById("IloscBonaParte").innerHTML = IloscBonaParte;

        CashCount = CashCount + MinerKoszt;
        document.getElementById("kasz").innerHTML = CashCount;

        CashPlus = CashPlus - BonusSlotDwa
        IloscBonaParte = IloscBonaParte - 1;
    }
}

function BuyTrzy() {
    if (CashCount >= MinerKoszt) {
        CashCount = CashCount - BonaparteKoszt;
        document.getElementById("kasz").innerHTML = CashCount;

        IloscBonaParte = IloscBonaParte + 1;
        document.getElementById("IloscBonaParte").innerHTML = IloscBonaParte;

        setInterval(function() {
            if (HpCount > 0) {
                HpCount = HpCount - (IloscBonaParte * BonusSlotTrzy)
                document.getElementById("HpCount").innerHTML = HpCount;

                if (HpCount <= 0) {
                    HpCount = 0;

                    var BackGroundBos = document.getElementById("BackGroundBos");
                    BackGroundBos.style.visibility = "visible";
                    BosNumber++;
                    document.getElementById("BosNumber").innerHTML = BosNumber;

                    IloscMagi = IloscMagi + DodatekMagi;
                    DodatekMagi = DodatekMagi * 2;


                    document.getElementById("HpCount").innerHTML = HpCount;
                    document.getElementById("IloscMagi").innerHTML = IloscMagi;
                    document.getElementById("DodatekMagi").innerHTML = DodatekMagi;
                }
            }
        }, 1000)
    }
}
var mENCHARTprice = 99999;

function BuyDragonMenchart() {
    if (CashCount >= mENCHARTprice) {
        CashCount = CashCount - mENCHARTprice;
        document.getElementById("kasz").innerHTML = CashCount;

        var GuzikiSlotCzteru = document.getElementById("GuzikiSlotCzteru");
        GuzikiSlotCzteru.style.visibility = "hidden";

        var DRAGON_MENCHART = document.getElementById("DRAGON_MENCHART");
        DRAGON_MENCHART.style.visibility = "visible";

        var MagicDoge = document.getElementById("MagicDoge");
        MagicDoge.style.visibility = "visible";
    }
}

function SusyOperation() {
    if (IloscMagi == 10000000) {
        HpCount = 0;

        if (HpCount <= 0) {
            HpCount = 0;

            var BackGroundBos = document.getElementById("BackGroundBos");
            BackGroundBos.style.visibility = "visible";
            BosNumber++;
            document.getElementById("BosNumber").innerHTML = BosNumber;

            IloscMagi = IloscMagi + DodatekMagi;
            DodatekMagi = DodatekMagi * 2;


            document.getElementById("HpCount").innerHTML = HpCount;
            document.getElementById("IloscMagi").innerHTML = IloscMagi;
            document.getElementById("DodatekMagi").innerHTML = DodatekMagi;
        }
    }
}
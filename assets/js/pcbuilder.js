class processor {
    constructor(name, brand, gen, model, socket, cores, threads, frequency,
        cache, mTech, memory, graphics, TDP) {
        this.name = name;
        this.brand = brand;
        this.gen = gen;
        this.model = model;
        this.socket = socket;
        this.cores = cores;
        this.threads = threads;
        this.frequency = frequency;
        this.cache = cache;
        this.mTech = mTech;
        this.memory = memory;
        this.graphics = graphics;
        this.TDP = TDP;
    };
};

class graphicsCard {
    constructor(name, brand, model, interf, frequency,
        memory, mType, mBandWidth, mInterface, TDP) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.interface = interf;
        this.frequency = frequency;
        this.memory = memory;
        this.mType = mType;
        this.mBandWidth = mBandWidth;
        this.mInterface = mInterface;
        this.TDP = TDP;
    };
};

class motherboard {
    constructor(name, brand, model, socket, memorySlots, memoryMax, memoryType,
        pciExpress, sata, audio, usb, formFactor) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.socket = socket;
        this.memorySlots = memorySlots;
        this.memoryMax = memoryMax;
        this.memoryType = memoryType;
        this.pciExpress = pciExpress;
        this.sata = sata;
        this.audio = audio;
        this.usb = usb;
        this.formFactor = formFactor;
    };
};

class ram {
    constructor(name, brand, model, type, speed, capacity, number) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.speed = speed;
        this.capacity = capacity;
        this.number = number;
    };
};

class storageDevice {
    constructor(name, brand, model, type, speed, capacity, interf, cache,amount) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.speed = speed;
        this.capacity = capacity;
        this.interface = interf;
        this.cache = cache;
        this.amount = amount;
    };
};

class powerSupply {
    constructor(name, brand, model, type, power, fans, interf) {
        this.name = name;
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.power = power;
        this.fans = fans;
        this.interface = interf;
    };
};

class PC {
    constructor(processor, graphicsCard, ram, motherboard, storageDevice, powerSupply) {
        this.processor = processor;
        this.graphicsCard = graphicsCard;
        this.ram = ram;
        this.motherboard = motherboard;
        this.storageDevice = storageDevice;
        this.powerSupply = powerSupply;
    };
};

let processor_L_1 = new processor("AMD Ryzen 3 2200G", "AMD", 3, "YD320GC5FHBOX",
    "Socket AM4", 4, 4, 3.6, 4, 12, "DDR4", "AMD Radeon Vega 8", 65);
let processor_M_1 = new processor("AMD Ryzen 5 3600", "AMD", 3, "100-100000031BOX",
    "Socket AM4", 6, 12, 3.6, 32, 7, "DDR4", "None", 65);
let processor_M_01 = new processor("AMD Ryzen 5 2400G", "AMD", 2, "YD2400C5M4MFB",
    "Socket AM4", 4, 8, 3.6, 4, 14, "DDR4", "AMD Radeon Vega 11", 65);
let processor_H_1 = new processor("AMD Ryzen 7 3800X", "AMD", 3, "100-100000025BOX",
    "Socket AM4", 8, 16, 3.9, 32, 7, "DDR4", "None", 105);

let processor_L_2 = new processor("Intel Core i3-10300", "Intel", 10, "BX8070110300",
    "LGA 1200", 4, 8, 3.7, 8, 14, "DDR4", "Intel UHD Graphics 630", 65);
let processor_M_2 = new processor("Intel Core i5-12600K", "Intel", 12, "BX8071512600K",
    "LGA 1700", 10, 16, 3.7, 20, 10, "DDR4", "Intel UHD Graphics 770", 125);
let processor_H_2 = new processor("Intel Core i7-12700K", "Intel", 12, "BX8071512700K",
    "LGA 1700", 12, 20, 3.6, 25, 10, "DDR4", "Intel UHD Graphics 770", 125);

let graphicsCard_H_2 = new graphicsCard("ASUS ROG Strix GeForce RTX 3090", "ASUS",
    "ROG-STRIX-RTX3090-O24G-GAMING", "PCI Express 4.0", 1890, 24, "GDDR6", 936, 384, 750);
let graphicsCard_M_2 = new graphicsCard("MSI Gaming GeForce RTX 3060", "MSI",
    "RTX 3060 Gaming X 12G", "PCI Express 4.0", 1837, 12, "GDDR6", 360, 192, 170);
let graphicsCard_HP_2 = new graphicsCard("PNY RTX A5000", "PNY",
    "VCQRTX5000-PB", "PCI Express 3.0", 1170, 24, "GDDR6", 768, 384, 230);
let graphicsCard_M_1 = new graphicsCard("GIGABYTE Radeon RX 6600", "GIGABYTE",
    "GV-R66EAGLE-8GD", "PCI Express 4.0", 1626, 8, "GDDR6", 224, 128, 170);

let motherboard_L_1 = new motherboard("MSI A320M-A PRO", "MSI", "A320M-A PRO", "AM4",
    2, 32, "DDR4", "1xPCI Express 3.0 x16", "4xSATA 6Gb/s", "Realtek ALC892", 3, "Micro ATX");
let motherboard_M_1 = new motherboard("MSI PRO B450M PRO-VDH MAX", "MSI", "B450M PRO-VDH MAX",
    "AM4", 4, 128, "DDR4", "1xPCI Express 3.0 x16", "4xSATA 6Gb/s", "Realtek ALC892", 3, "Micro ATX");
let motherboard_H_1 = new motherboard("MSI X470 GAMING PLUS", "MSI", "X470 GAMING PLUS",
    "AM4", 4, 64, "DDR4", "2xPCI Express 3.0 x16", "6xSATA 6Gb/s", "Realtek ALC892", 8, "ATX");

let motherboard_L_2 = new motherboard("ASRock H510M-HDV", "ASRock", "H510M-HDV LGA", "LGA 1200",
    2, 64, "DDR4", "1xPCI Express 4.0 x16", "4xSATA 6Gb/s", "Realtek ALC897", 3, "Micro ATX");
let motherboard_M_2 = new motherboard("MSI B560M PRO-E", "MSI", "B560M PRO-E", "LGA 1200",
    4, 64, "DDR4", "1xPCI Express 4.0 x16", "4xSATA 6Gb/s", "Realtek ALC897", 3, "Micro ATX");
let motherboard_H_2 = new motherboard("ASUS TUF Gaming Z690-Plus", "ASUS", "Gaming Z690-Plus",
    "LGA 1700", 4, 128, "DDR4", "1xPCI Express 5.0 x16", "4xSATA 6Gb/s", "Realtek ALC897", 8, "ATX");

let ram_L_1 = new ram("Crucial 8GB 288-Pin DDR4 SDRAM", "Crucial", "288-Pin DDR4 SDRAM",
    "DDR4", 2666, 8, 1);
let ram_M_1 = new ram("CORSAIR Vengeance LPX 16GB 288-Pin DDR4 SDRAM", "CORSAIR",
    "Vengeance LPX 288-Pin DDR4 SDRAM", "DDR4", 3200, 16, 2);
let ram_H_1 = new ram("CORSAIR Vengeance LPX 32GB 288-Pin DDR4 SDRAM", "CORSAIR",
    "Vengeance LPX 288-Pin DDR4 SDRAM", "DDR4", 3600, 32, 2);

let hdd_L_1 = new storageDevice("WD Blue 1TB", "WD",
    "Blue 1TB", "HDD", 7200, 1024, "SATA3", 64,0);
let hdd_M_1 = new storageDevice("WD Black 1TB", "WD",
    "Black 2TB", "HDD", 7200, 1024, "SATA3", 64,0);

let ssd_M_1 = new storageDevice("Crucial MX500 1TB", "Crucial",
    "MX500 1TB", "SSD", 560, 1024, "SATA3", 0,0);
let ssd_H_1 = new storageDevice("SAMSUNG 870 EVO Series", "SAMSUNG",
    "870 EVO Series", "SSD", 560, 1024, "SATA3", 2048,0);

let powerSupply_L_1 = new powerSupply("EVGA 450 BR 100-BR-0450-K1 450 W", "EVGA",
    "450 BR 100-BR-0450-K1 450 W", "ATX12V/EPS12V", 450, 1, "24-pin");
let powerSupply_M_1 = new powerSupply("CORSAIR RMx Series RM650x CP-9020198-NA 650 W",
    "CORSAIR", "RMx Series RM650x CP-9020198-NA 650 W", "ATX12V/EPS12V", 600, 1, "24-pin");
let powerSupply_H_1 = new powerSupply("CORSAIR RM850 CP-9020235-NA 850 W",
    "CORSAIR", "RM850 CP-9020235-NA 850 W", "ATX12V/EPS12V", 850, 1, "24-pin");

// Office
let PC_OL_1 = new PC(processor_L_1, null, ram_L_1, motherboard_L_1, [], powerSupply_L_1);
let PC_OL_2 = new PC(processor_L_2, null, ram_L_1, motherboard_L_2, [], powerSupply_L_1);

let PC_OM_1 = new PC(processor_M_01, null, ram_M_1, motherboard_M_1, [], powerSupply_L_1);
let PC_OM_2 = new PC(processor_M_2, null, ram_M_1, motherboard_M_2, [], powerSupply_L_1);

let PC_OH_1 = new PC(processor_H_1, null, ram_H_1, motherboard_H_1, [], powerSupply_M_1);
let PC_OH_2 = new PC(processor_H_2, null, ram_H_1, motherboard_H_2, [], powerSupply_M_1);

// Gaming
let PC_GL_1 = new PC(processor_L_1, graphicsCard_M_1, ram_L_1, motherboard_L_1, [], powerSupply_M_1);
let PC_GL_2 = new PC(processor_L_2, graphicsCard_M_2, ram_L_1, motherboard_L_1, [], powerSupply_M_1);

let PC_GM_1 = new PC(processor_M_1, graphicsCard_M_1, ram_M_1, motherboard_M_1, [], powerSupply_M_1);
let PC_GM_2 = new PC(processor_M_2, graphicsCard_M_2, ram_M_1, motherboard_M_2, [], powerSupply_M_1);

let PC_GH_1 = new PC(processor_H_1, graphicsCard_H_2, ram_H_1, motherboard_H_1, [], powerSupply_H_1);
let PC_GH_2 = new PC(processor_H_2, graphicsCard_H_2, ram_H_1, motherboard_H_2, [], powerSupply_H_1);

// Professional
let PC_PH_1 = new PC(processor_H_1, graphicsCard_HP_2, ram_H_1, motherboard_H_1, [], powerSupply_H_1);
let PC_PH_2 = new PC(processor_H_2, graphicsCard_HP_2, ram_H_1, motherboard_H_2, [], powerSupply_H_1);



window.onload = function() {
    setDefault();
    setInterval(setRngData, 100);
};

// Visual
let options = document.getElementsByClassName("option");
let inner = document.getElementById("builderInnter");
let settings = document.getElementById("settings");
let res = document.getElementById("builderResult");
let background = document.getElementById("builderOuter");
// Settings
let selected = 0;
let priceRng = document.getElementById("priceRange");
let hddRng = document.getElementById("hddRange");
let ssdRng = document.getElementById("ssdRange");

let pcArrAMD = [PC_GL_1,PC_GM_1,PC_GH_1,PC_OL_1,PC_OM_1,PC_OH_1,PC_PH_1];
let pcArrIntel = [PC_GL_2,PC_GM_2,PC_GH_2,PC_OL_2,PC_OM_2,PC_OH_2,PC_PH_2];

function setDefault(){
    /*options[0].style.backgroundImage="linear-gradient(90deg,white,red)";
    options[1].style.backgroundImage="none";
    options[2].style.backgroundImage="none";*/

    options[0].style.backgroundColor="#3C5864";
    options[1].style.backgroundColor="grey";
    options[2].style.backgroundColor="grey";
    /*inner.style.backgroundColor="lightgrey";*/
    settings.style.backgroundColor="#3C5864";
    
}

function setRngData(){
    document.getElementById("hddRangeInfo").innerHTML = ": " + hddRng.value + " TB";
    document.getElementById("ssdRangeInfo").innerHTML = ": " + ssdRng.value + " TB";
}

function chosenG(){
    options[0].style.backgroundColor="#3C5864";
    options[1].style.backgroundColor="grey";
    options[2].style.backgroundColor="grey";
    settings.style.backgroundColor="#3C5864";
    selected = 0;
    priceRng.removeAttribute("disabled");
    background.style.backgroundImage = "url(assets/files/images/bg_gaming.jpg)";
}

function chosenO(){
    options[0].style.backgroundColor="grey";
    options[1].style.backgroundColor= "#BAD3DA";
    options[2].style.backgroundColor="grey";
    settings.style.backgroundColor="#BAD3DA";
    selected = 1;
    priceRng.removeAttribute("disabled");
    background.style.backgroundImage = "url(assets/files/images/bg_office.jpg)";
}

function chosenP(){
    options[0].style.backgroundColor="grey";
    options[1].style.backgroundColor="grey";
    options[2].style.backgroundColor="#CFB093";
    settings.style.backgroundColor="#CFB093";
    selected = 2;
    priceRng.value = 3;
    priceRng.setAttribute("disabled",true);
    background.style.backgroundImage = "url(assets/files/images/bg_prof.jpg)";
}

function buildPC(){

    let pc1= document.getElementsByClassName("PC1");
    let pc2= document.getElementsByClassName("PC2");
    let sdValue;
    switch(priceRng.value){
        case '0':
            hdd_L_1.amount = hddRng.value;
            ssd_M_1.amount = ssdRng.value;
            sdValue = [hdd_L_1,ssd_M_1];
            break;
        case '1':
            hdd_M_1.amount = hddRng.value;
            ssd_M_1.amount = ssdRng.value;
            sdValue = [hdd_M_1,ssd_M_1];
            break;
        case '2':
            hdd_M_1.amount = hddRng.value;
            ssd_H_1.amount = ssdRng.value;
            sdValue = [hdd_M_1,ssd_H_1];
            break;
    }

    switch(selected){
        case 0:
            applyValues(pc1,pcArrAMD[(priceRng.value)],sdValue);
            applyValues(pc2,pcArrIntel[(priceRng.value)],sdValue);
            break;
        case 1:
            applyValues(pc1,pcArrAMD[parseInt(priceRng.value,10)+3],sdValue);
            applyValues(pc2,pcArrIntel[parseInt(priceRng.value,10)+3],sdValue);
            break;
        case 2:
            applyValues(pc1,pcArrAMD[6],sdValue);
            applyValues(pc2,pcArrIntel[6],sdValue);
            break;
    }
    res.style.display = "flex";

    let y = document.getElementById("builderResult").getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });

}

function applyValues(place, value, sdValue){

    console.log(value.processor.name);
    if(value.graphicsCard==null){
        console.log("Integrated");
    }else{
        console.log(value.graphicsCard.name);
    }
    console.log(value.motherboard.name);
    console.log(value.ram.name);
    console.log(value.powerSupply.name);
    if(sdValue[0].amount > 0){
        console.log(sdValue[0].name + " X" + sdValue[0].amount);
    }
    if(sdValue[1].amount > 0){
        console.log(sdValue[1].name + " X" + sdValue[1].amount);
    }

    place[0].innerHTML = value.processor.name;
    if(value.graphicsCard==null){
        place[1].innerHTML = "Integrated";
    }else{
        place[1].innerHTML = value.graphicsCard.name;
    }
    place[2].innerHTML = value.motherboard.name;
    place[3].innerHTML = value.ram.name;
    place[4].innerHTML = value.powerSupply.name;
    if(sdValue[0].amount > 0){
        place[5].innerHTML = sdValue[0].name + " <br><b>-Amount:" + sdValue[0].amount + "</b>";
    }
    else{
        place[5].innerHTML = "";
    }
    if(sdValue[1].amount > 0){
        place[5].innerHTML = place[5].innerHTML + "<br>" + sdValue[1].name + " <br><b>-Amount:" + sdValue[1].amount + "</b>";
    }
}
class ElectricalAppliances {
    constructor(name, power){
      this.permissibleload = 1320;
      this.name = name;
      this.power = power;
    }
    getPower(power, name, permissibleload){
      if (power <= permissibleload){
        console.log(`Прибор ${name} можно включить в розетку`)
      }else if(power > permissibleload){
        console.log(`Прибор ${name} не включать в розетку`)
      }
    }
  }
  
  class Computer extends ElectricalAppliances{
    constructor(operatingsystem, cpu, brightness, name, power){
      super(name, power);
      this.operatingsystem = operatingsystem;
      this.cpu = cpu;
      this.brightness = brightness;
    }
    getBrightness(brightness){
      console.log(`Настроить на ${brightness} % яркость экрана компьютера`)
    }
  }
  
  class Desklamp extends ElectricalAppliances{
    constructor(luminousflux, height, name, power){
      super(name, power);
      this.luminousflux = luminousflux;
      this.height = height;
    }
    getHeight(height){
      console.log(`Установить на ${height} см. высоту настольной лампы`)
    }
  }
  
    const desktopcomputer = new Computer('desktopcomputer', 400, 'window 10', 'intel', 90);
    const notebook = new Computer('notebook', 100, 'window 7', 'core', 80);
    const incandescentlamp = new Desklamp('incandescentlamp', 80, 300, 30);
    const ledlamp = new Desklamp('ledlamp', 60, 200, 25);
    
    desktopcomputer.getPower(400, 'desktopcomputer', 1320);
    notebook.getPower(100, 'notebook', 1320);
    incandescentlamp.getPower(80, 'incandescentlamp', 1320);
    ledlamp.getPower(60, 'ledlamp', 1320);
      
    desktopcomputer.getBrightness(90);
    notebook.getBrightness(80);
    incandescentlamp.getHeight(30);
    ledlamp.getHeight(25);
  
    
    
    
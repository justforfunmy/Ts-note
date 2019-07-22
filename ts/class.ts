//类的修饰符 
//public ;公有，在类里面，子类，类外面可以访问
//protected;保护类型,在类里面，子类里面可以访问，类外面不可以
//pravite;私有；只能在类里面访问，子类和类外面不能访问



class Person{
    name:string; //省略public关键字
    constructor(name:string){
        //构造函数，实例化类的时候触发的方法
        this.name=name
    }

    run():void{
        console.log(this.name+' run')
    }

    getName():string{
        return this.name
    }

    setName(name:string):void{
        this.name=name;
    }

    private sleep():void {
        console.log(this.name+' sleep')
    }

    protected hello():void{
        this.sleep()
        console.log(this.name+' hello')
    }

}

let p = new Person('king');
p.run()
p.setName('john')
console.log(p.getName())




//ts继承 extends,super
class Web extends Person{
    constructor(name:string){
        //初始化父类的构造函数
        super(name)
    }
    run():void{
        console.log(this.name+' is running')
    }
    work():void{
        console.log(this.name+' work')
    }
    say():void{
        this.hello()
    }
}

let w = new Web('sara')
w.run()
w.work()
w.say()


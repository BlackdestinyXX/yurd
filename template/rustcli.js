const mainrs = `use structopt::StructOpt;

#[derive(StructOpt, Debug)]
#[structopt(name = "demo")]
struct Opt {
    #[structopt(short = "g", long = "greet")]
    pub greet: bool,
}

fn main() {
    let opt = Opt::from_args();
    if opt.greet {
        println!("Hello, welcome to Yurd cli template!");
    }
    else {
        println!("missing something?");
    }
}`

module.exports = {
    code: [{fileName: 'main.rs', fileCode: mainrs}],
    name: ['rustcli', 'rust-cli'],
}
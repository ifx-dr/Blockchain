const SHA256 = require('./node_modules/sha256');
 


class Block {
    constructor(index, timestamp, data, previousHash = ''){
this.index = index;
this.timestamp = timestamp;
this.data = data; 
this.previousHash = previousHash;
this.hash = this.calculateHash();
    }

    calculateHash(){
return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class Blockchain{
    constructor(){
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock(){
        return new Block(0, "01/01/2021", "Genesis Block", "0")
    }

    getLatestBlock(){

        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock){

        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);

    }
}

let DRchain = new Blockchain(); 
DRchain.addBlock(new Block( 1, "18.09.2020", "https://github.com/tibonto/dr/commit/53d314176ecf10561ff29f53aca1ba865c930bec"))
DRchain.addBlock(new Block( 2, "07.10.2020", "https://github.com/tibonto/dr/commit/23dbc54f1a0bb9d507e75ca4522610976e334fbf"));
DRchain.addBlock(new Block( 3, "15.12.2021", "https://github.com/tibonto/dr/commit/8920b95f1cd211c6410c1afd7bb8c97bb12bea33#diff-737d24d6a48ad5213e68f61ba9be0902f83b27a61fcc8fe1fda190d874221029"));
DRchain.addBlock(new Block( 4, "26.03.2021", "https://github.com/tibonto/dr/commit/4a75916ca89d5da7695b2adb64dedb77c5629c48"));
DRchain.addBlock(new Block( 5, "01.04.2021", "https://github.com/tibonto/dr/commit/524d5218726c3f2b43d383bbb047ecbf7a225063"));
DRchain.addBlock(new Block( 6, "09.04.2021", "https://github.com/tibonto/dr/commit/885db0a52231f4bf20658f6c174ed069e0a493b6"));
DRchain.addBlock(new Block( 7, "16.04.2021", "https://github.com/tibonto/dr/commit/d5119b74be556adf61ab38c5ad3066bf8feaa2fc"));
DRchain.addBlock(new Block( 8, "23.04.2021", "https://github.com/tibonto/dr/commit/dfdf70e6d62fc1a3f0bdcc29715f9815e2512ea7"));
DRchain.addBlock(new Block( 9, "30.04.2021", "https://github.com/tibonto/dr/commit/966a8b5e5d5b96a7216feda828ee91689d8fa639"));
DRchain.addBlock(new Block(10, "07.05.2021", "https://github.com/tibonto/dr/commit/c7689fa12f8aee95c9cfe607892674dfde9e2b94"));
DRchain.addBlock(new Block(11, "14.05.2021", "https://github.com/tibonto/dr/commit/01a29bd48bd2357baf05ed3277903b804707ed02"));
DRchain.addBlock(new Block(12, "21.05.2021", "https://github.com/tibonto/dr/commit/01a29bd48bd2357baf05ed3277903b804707ed02"));
DRchain.addBlock(new Block(13, "28.05.2021", "https://github.com/tibonto/dr/commit/594944f62961e528da6d70c97382e47dbffc0b3d"));
DRchain.addBlock(new Block(14, "04.06.2021", "https://github.com/tibonto/dr/commit/1c4fb03f9e99febb73ce7f729b7338a15960cdef"));
DRchain.addBlock(new Block(15, "11.06.2021", "https://github.com/tibonto/dr/commit/38a85601575464d0d80932ac35e95835df1809f7"));
DRchain.addBlock(new Block(16, "18.06.2021", "https://github.com/tibonto/dr/commit/b84b930c5add59e764636da663c8f14575cc5997"));
DRchain.addBlock(new Block(17, "25.06.2021", "https://github.com/tibonto/dr/commit/2885b777e58c0b2c205dcf9936a0eb1fa6728f8d"));
DRchain.addBlock(new Block(18, "02.07.2021", "https://github.com/tibonto/dr/commit/3bec095b369bc1faa5f3cbb665d925b20f0a5b2d"));
DRchain.addBlock(new Block(19, "09.07.2021", "https://github.com/tibonto/dr/commit/ee5bba99487e6072a6d38b064eb3af44ba51311e"));
DRchain.addBlock(new Block(20, "16.07.2021", "https://github.com/tibonto/dr/commit/456adbbf2b41a4b19a047f4cd7480db31ec39040"));
DRchain.addBlock(new Block(21, "23.07.2021", "https://github.com/tibonto/dr/commit/aec64fed0b7a7762bb41b8bf37696304d9dd59c8"));
DRchain.addBlock(new Block(22, "30.07.2021", "https://github.com/tibonto/dr/commit/9f405cbd7b2c74cab49cf7655e5c472b326caba5#diff-737d24d6a48ad5213e68f61ba9be0902f83b27a61fcc8fe1fda190d874221029"));
DRchain.addBlock(new Block(23, "06.08.2021", "https://github.com/tibonto/dr/commit/002561cc8ae82e806d0d4f88be348786306f23f5"));
DRchain.addBlock(new Block(24, "13.08.2021", "https://github.com/tibonto/dr/commit/78afa80106fa24e487a89a07f7d3fdd9b940fbdb"));
DRchain.addBlock(new Block(25, "10.09.2021", "https://github.com/tibonto/dr/commit/1388590c64afc54825d114aa0ed60bad11edd253#diff-737d24d6a48ad5213e68f61ba9be0902f83b27a61fcc8fe1fda190d874221029"));
DRchain.addBlock(new Block(26, "17.09.2021", "https://github.com/tibonto/dr/commit/991f3e674560e0dd56a8eabdd4f9e8e3d29e0ff6#diff-737d24d6a48ad5213e68f61ba9be0902f83b27a61fcc8fe1fda190d874221029"));
DRchain.addBlock(new Block(27, "24.09.2021", "https://github.com/tibonto/dr/commit/d698e689eeff992a1f8fbd302d10153720d7cfc5"));
DRchain.addBlock(new Block(28, "01.10.2021", "https://github.com/tibonto/dr/commit/a7dbc7a73d8017603ebec99f101d28b10273f1a7"));
DRchain.addBlock(new Block(29, "11.10.2021", "https://github.com/tibonto/dr/commit/9db47057f9f71963d28b105627ff084bf936965f"));
DRchain.addBlock(new Block(30, "18.10.2021", "https://github.com/tibonto/dr/commit/707317591da7f599cd39047e7386aac59963ae04"));
DRchain.addBlock(new Block(31, "7.11.2021", "https://github.com/tibonto/dr/commit/58fea869ce4a712da9c8e6ed7086a34509c271fb"));
DRchain.addBlock(new Block(32, "10.12.2021", "https://github.com/tibonto/dr/commit/310c40cc28e6e1dc38080e671861970d9b418e8f"));
DRchain.addBlock(new Block(33, "31.01.2022", "https://github.com/tibonto/dr/commit/2b6218453ed75b40bedd7c341ab0fb855a468c98"));
DRchain.addBlock(new Block(34, "14.02.2022", "https://github.com/tibonto/dr/commit/6d6fe56fb547a1ec46606c012e677594a28c7590"));

console.log("Digital Reference Blockchain \n ");
console.log("See newest Block added: \n");

const LatestBlock = DRchain.getLatestBlock();

console.log(JSON.stringify(LatestBlock, null, 4));

console.log("\nSee complete Blockchain of Digital Reference Updates: \n"); 


console.log(JSON.stringify(DRchain, null, 4)); //four spaces to format it 
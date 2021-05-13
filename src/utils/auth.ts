import * as jwt from "jsonwebtoken";


const secret = process.env.SECRET_KEY || "7gh$65&3hjk9AKE4#";
const expire = process.env.JWT_expire || "1d";

export function checkAccess(req:any,res:any,next:any) {
    const { id,checksum } = req.params;

    next();
}

export function checkRootAccess(req:any,res:any,next:any) {
    
    const token = req.headers.authorization ? (req.headers.authorization).split('.')[1] : undefined;
    console.log(token)
    if (!token) {
        return res.status(401).send({faliure: true, message: "No api key was provided"})
    }
    let access;
    try {
        access = (jwt.verify(token, secret));
    } catch (error) {
        return res.status(401).send({faliure: true, message: error.message})
    }

    next();
}

// Generate an API key with no expiry date
export function genAPIKey(obj: any) {
    const key = jwt.sign({data:obj}, secret);
    return key;
  }
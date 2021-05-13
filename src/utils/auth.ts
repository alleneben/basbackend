
export function checkAccess(req:any,res:any,next:any) {
    const { id,checksum } = req.params;

    next();
}
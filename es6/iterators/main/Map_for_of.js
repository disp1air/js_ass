// Map + for-of  
const permissionMap = new Map();
permissionMap.set('admin', {read: true, write: true, del: true});
permissionMap.set('user', {read: true, write: false, del: false});

for (const p of permissionMap) {
    console.log(p);
}
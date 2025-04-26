import { StorageManager } from './StorageManager.js';

export class AccessControl {
    static restrictAccess() {
        try {
            const currentUser = StorageManager.load("currentUser");
            const currentPath = window.location.pathname;
            const currentHref = window.location.href;
            
            console.log("Current User:", currentUser);
            console.log("Current Path:", currentPath);
            
            // Define allowed paths for each role
            const allowedPaths = {
                customer: [
                    "/index.html",
                    "/Sign.html",
                    "/SignUp.html",
                    "/testpage.html",
                    "/checkout.html",
                    "/add-to-cart.html"
                ],
                seller: [
                    "/index.html",
                    "/Sign.html",
                    "/SignUp.html",
                    "/testpageseller.html"
                ],
                admin: [
                    "/index.html",
                    "/Sign.html",
                    "/SignUp.html",
                    "/admin/dashboard.html"
                ],
                guest: [
                    "/index.html",
                    "/Sign.html",
                    "/SignUp.html"
                ]
            };

            // Special handling for checkout and add-to-cart pages
            if (!currentUser && (currentHref.includes("checkout.html") || currentHref.includes("add-to-cart.html"))) {
                window.location.href = "Sign.html";
                return;
            }
            

            //WRITE HERE IF U WANT TO REDIRECT 
            if (currentUser) {
                const userRole = currentUser.role;
                
                // Allow if path ends with one of the allowed paths
                const isAllowed = allowedPaths[userRole].some(path => 
                    currentPath.endsWith(path)
                );
                
                if (!isAllowed) {
                    // Redirect to appropriate page based on role here 
                    if (userRole === "customer") {
                        window.location.href = "testpage.html";
                    } else if (userRole === "seller") {
                        window.location.href = "testpageseller.html";
                    } else if (userRole === "admin") {
                        window.location.href = "admin.html";
                    
                  }
                }
            } else {
                // User is not logged in (guest)
                const isAllowed = allowedPaths.guest.some(path => 
                    currentPath.endsWith(path)
                );
                
                if (!isAllowed) {
                    window.location.href = "Sign.html";
                }
            }
        } catch (error) {
            console.error("Access control error:", error);
        }
    }
}
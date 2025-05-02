import { StorageManager } from './StorageManager.js';

export class AccessControl {
    static restrictAccess() {
        try {
            const currentUser = StorageManager.load("currentUser");
            const currentPath = window.location.pathname;
            const currentHref = window.location.href;
            
            console.log("Current User:", currentUser);
            console.log("Current Path:", currentPath);
            console.log("Current URL:", currentHref);
            
            // Define allowed paths for each role
            const allowedPaths = {
                customer: [
                    "/index.html",
                    "/Sign.html",
                    "/SignUp.html",
                    "../index.html",
                    "/checkout.html",
                    "../checkout.html",
                    "/Shopping Cart/Cart.html",
                    "../Shopping Cart/Cart.html",
                    "/Customer Dashboard/customer-dashboard.html",
                    "../Customer Dashboard/customer-dashboard.html",
                    "/Productdetails/productDetails.html",
                    "../Productdetails/productDetails.html",
                    "/productCatalog.html",
                    "../productCatalog.html",
                    "/ContactUs.html",
                    "../ContactUs.html"
                ],
                seller: [
                    "/index.html",
                    "/Sign.html",
                    "/SignUp.html",
                    "../index.html",
                    "../Seller DashBoard/SellerDashboard.html",
                    "/Seller DashBoard/SellerDashboard.html",
                    "/Productdetails/productDetails.html",
                    "../Productdetails/productDetails.html",
                    "/productCatalog.html",
                    "../productCatalog.html",
                    "/ContactUs.html",
                    "../ContactUs.html"
                ],
                admin: [
                    "/index.html",
                    "/Sign.html",
                    "/SignUp.html",
                    "../index.html",
                    "/AdminDashboard.html",
                    "../AdminDashboard.html",
                    "/AdminDashboardCustomerService.html",
                    "../AdminDashboardCustomerService.html",
                    "/AdminProductDashboard.html",
                    "../AdminProductDashboard.html",
                    "/AdminSellerDashboard.html",
                    "../AdminSellerDashboard.html",
                    "/Productdetails/productDetails.html",
                    "../Productdetails/productDetails.html",
                    "/productCatalog.html",
                    "../productCatalog.html",
                    "/ContactUs.html",
                    "../ContactUs.html"
                ],
                guest: [
                    "/index.html",
                    "/Sign.html",
                    "/SignUp.html",
                    "../index.html",
                    "/Productdetails/productDetails.html",
                    "../Productdetails/productDetails.html",
                    "/productCatalog.html",
                    "../productCatalog.html",
                    "/ContactUs.html",
                    "../ContactUs.html"
                ]
            };

            // First, check if we're already on Sign.html or SignUp.html - if so, no need to check further for guests
            if (!currentUser && (currentPath.includes("Sign.html") || currentPath.includes("SignUp.html"))) {
                console.log("Already on authentication page, no redirection needed");
                return;
            }

            // Guest here is restricted shopping pages (checkout and cart)
            if (!currentUser) {
                // Check both path and href to catch all variations
                const isCheckoutPage = 
                    currentPath.includes("checkout.html") || 
                    currentHref.includes("checkout.html");
                
                const isCartPage = 
                    currentPath.includes("Shopping Cart/Cart.html") || 
                    currentHref.includes("Shopping Cart/Cart.html") ||
                    (currentPath.includes("Cart.html") && currentPath.includes("Shopping"));
                
                if (isCheckoutPage || isCartPage) {
                    console.log("Guest attempting to access restricted shopping page:", currentPath);
                    
                    // guest will return to sign - Determine correct redirection path to Sign.html
                    let signPath;
                    if (currentPath.includes("/Sign/")) {
                        signPath = "Sign.html";
                    } else if (currentPath.startsWith("/")) {
                        signPath = "/Sign/Sign.html";
                    } else {
                        signPath = "../Sign/Sign.html";
                    }
                    
                    window.location.href = signPath;
                    return;
                }
            }
            
            // Dashboard access restrictions
            if (!currentUser) {
                const isDashboardPage = 
                    currentHref.includes("Seller DashBoard") || 
                    currentHref.includes("Customer Dashboard") || 
                    currentHref.includes("Admin");
                
                if (isDashboardPage) {
                    console.log("Guest attempting to access dashboard");
                    
                    // Determine correct path to Sign.html based on current location
                    let signPath;
                    if (currentPath.includes("/Sign/")) {
                        signPath = "Sign.html";
                    } else if (currentPath.startsWith("/")) {
                        signPath = "/Sign/Sign.html";
                    } else {
                        signPath = "../Sign/Sign.html";
                    }
                    
                    window.location.href = signPath;
                    return;
                }
            }
            
            if (currentUser) {
                const userRole = currentUser.role;
                
                // Check for cross-role dashboard access
                // Seller Dashboard restricted to sellers only
                
                if (userRole !== "seller" && currentHref.includes("Seller DashBoard")) {
                    console.log("Non-seller attempting to access seller dashboard");
                    
                    if (userRole === "customer") {
                        window.location.href = "../Customer Dashboard/customer-dashboard.html";
                    } else if (userRole === "admin") {
                        window.location.href = "../AdminDashboard.html";
                    }
                    return;
                }
                
                // Customer Dashboard restricted to customers only
                
                if (userRole !== "customer" && currentHref.includes("Customer Dashboard")) {
                    console.log("Non-customer attempting to access customer dashboard");
                    
                    if (userRole === "seller") {
                        window.location.href = "../Seller DashBoard/SellerDashboard.html";
                    } else if (userRole === "admin") {
                        window.location.href = "../AdminDashboard.html";
                    }
                    return;
                }
                
                // Admin Dashboard restricted to admins only

                if (userRole !== "admin" && currentHref.includes("Admin")) {
                    console.log("Non-admin attempting to access admin dashboard");
                    
                    if (userRole === "customer") {
                        window.location.href = "../Customer Dashboard/customer-dashboard.html";
                    } else if (userRole === "seller") {
                        window.location.href = "../Seller DashBoard/SellerDashboard.html";
                    }
                    return;
                }
                
                // Block sellers from accessing checkout and cart 
                if (userRole === "seller" && (
                    currentPath.includes("checkout.html") || 
                    currentHref.includes("checkout.html") ||
                    currentPath.includes("Shopping Cart/Cart.html") ||
                    currentHref.includes("Shopping Cart/Cart.html"))) {
                    
                    console.log("Seller attempting to access checkout or cart");
                    window.location.href = "../Seller DashBoard/SellerDashboard.html";
                    return;
                }
                
                // Check if current path is allowed for the user role
                // Redirect to appropriate page based on role
                const isAllowed = allowedPaths[userRole].some(path => 
                    currentPath.endsWith(path) || currentHref.includes(path)
                );
                
                if (!isAllowed) {
                    console.log("Access not allowed for current user role:", userRole);
                    
                    if (userRole === "customer") {
                        window.location.href = "../Customer Dashboard/customer-dashboard.html";
                    } else if (userRole === "seller") {
                        window.location.href = "../Seller DashBoard/SellerDashboard.html";
                    } else if (userRole === "admin") {
                        window.location.href = "../AdminDashboard.html";
                    }
                }
            } else {
                // User is not logged in (guest)
                // Determine correct path to Sign.html based on current location
                const isAllowed = allowedPaths.guest.some(path => 
                    currentPath.endsWith(path) || currentHref.includes(path)
                );
                
                if (!isAllowed) {
                    console.log("Access not allowed for guest, redirecting to Sign page");
                    
                    let signPath;
                    if (currentPath.includes("/Sign/")) {
                        signPath = "Sign.html";
                    } else if (currentPath.startsWith("/")) {
                        signPath = "/Sign/Sign.html";
                    } else {
                        signPath = "../Sign/Sign.html";
                    }
                    
                    window.location.href = signPath;
                }
            }
        } catch (error) {
            console.error("Access control error:", error);
        }
    }
}
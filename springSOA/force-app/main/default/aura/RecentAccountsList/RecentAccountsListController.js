({
    doInit : function(component, event, helper) {
        var action = component.get("c.getRecentAccounts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.accounts", response.getReturnValue());
            }
            else {
                console.log("Error retrieving accounts");
            }
        });
        $A.enqueueAction(action);
    }
})


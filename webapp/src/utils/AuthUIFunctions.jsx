var AuthUIFunctions = {
    /*
    Returns empty string if no errors and redirect if needed, may with a delay.
    */
    handleResponse: function(response){
        if (response && response.data) {
            if (response.data.redirect){
                if (response.data.redirectDelay){
                    setTimeout(function(){
                        window.location.href = response.data.redirect;
                    }, response.data.redirectDelay * 1000);
                } else {
                    window.location.href = response.data.redirect;
                }
            }
            if (!response.data.result){
                return response.data.error || 'Something went wrong during this request.';
            }
        } else {
            return 'Could not make the request for some reason, please try again.';
        }
        return ''; // Errors list is empty.
    }
};
export { AuthUIFunctions };
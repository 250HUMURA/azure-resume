window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let Count = 30;
    fetch(functionApi).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        Count = response.count
        document.getElementById("counter").innerTest =count;
    }).catch(function(error){
        console.log(error)
    });
    return count;
}
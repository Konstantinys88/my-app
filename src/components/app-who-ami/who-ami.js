

function WhoAmI ({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name()}, surname - {surname} </h1>
            <a href={link}>My profile</a>
        </div>
    )
}

export default WhoAmI;
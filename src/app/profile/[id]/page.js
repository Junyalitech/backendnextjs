export default function UserProfilePage({ params }: any) {
    return (
        <div>
            <h1>Profile {params && params.id}</h1>
            <hr />
            <p>Profile Page </p>
        </div>
    );
}

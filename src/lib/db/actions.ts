'use server';

export async function addOwner(formData: FormData) {
    const firstName = formData.get('firstName')?.toString();
    const lastName = formData.get('lastName')?.toString();
    const isRedirected = !Boolean(formData.get('redirect')) || true;
    if (!firstName || !lastName) {
        return;
    }
    console.log(firstName, lastName, isRedirected);
}

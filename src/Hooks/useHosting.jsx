const useHosting = () => {
    const img_hosting_token = import.meta.env.VITE_Img_Upload_Token;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    return img_hosting_url;
};

export default useHosting;
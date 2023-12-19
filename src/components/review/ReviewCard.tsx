interface Props {
    stars: string;
    review: string;
    name: string;
    role: string;
    image: string
}

export const ReviewCard = ({ stars, review, name, role, image }: Props) => {
    const numeroDeStarts = parseInt(stars, 10);
    const elementos = Array.from({ length: numeroDeStarts }, (_, index) => (
        <svg className="w-5 h-5 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    ));
    const inactivas = Array.from({ length: 5 - numeroDeStarts }, (_, index) => (
        <svg className="w-5 h-5 ms-1 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
    ));
    return (
        <>
            <div className="w-[330px] h-[244px] bg-[#FFFFFF] py-[30px] px-[35px] border-[1px] border-solid border-[#DEDEDE]">
                <div className="flex items-center mb-[20px]">
                    {
                        elementos
                    }
                    {
                        inactivas
                    }
                </div>

                <h6 className="font-bold text-gray-text">{ review }</h6>
                <div className="personal-info mt-[20px] flex flex-row">
                    <img src="photo.svg" alt="photo" />
                    <div className="texts ml-[15px]">
                        <h5 className="a font-semibold text-[#D0A144]">{ name }</h5>
                        <h5 className="font-bold text-primary-blue">{ role }</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

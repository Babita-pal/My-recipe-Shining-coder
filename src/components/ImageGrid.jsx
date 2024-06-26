import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import './ImageGrid.css';

const ImageGrid = ({ data, loading }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleImageClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  useEffect(() => {
    console.log('Image data:', data);
  }, [data]);

  return (
    <>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        data && data.length > 0 ? (
          <div className="image-grid">
            {data.map((recipe) => (
              <div key={recipe.id} className="recipe-item" onClick={() => handleImageClick(recipe)}>
                <img src={recipe.image_url} alt={recipe.title} />
                <p>{recipe.title}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="image-grid">
            <img src="/images/img1.png" alt="Image 1" />
            <img src="/images/img17.jpg" alt="Image 2" />
            <img src="/images/img11.jpeg" alt="Image 3" />
            <img src="/images/img10.webp" alt="Image 4" />
            <img src="/images/img9.webp" alt="Image 5" />
            <img src="/images/img16.jpg" alt="Image 6" />
            <img src="/images/img3.jpg" alt="Image 7" />
            <img src="/images/img15.webp" alt="Image 8" />
            <img src="/images/img4.jpg" alt="Image 9" />
            <img src="/images/img12.jpg" alt="Image 10" />
            <img src="/images/img14.jpg" alt="Image 11" />
            <img src="/images/img13.jpg" alt="Image 12" />
          </div>
        )
      )}
      <Modal show={!!selectedRecipe} onClose={handleCloseModal} recipe={selectedRecipe} />
    </>
  );
};

export default ImageGrid;

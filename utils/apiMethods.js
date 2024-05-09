export const getCaloriesBasedRecipes = async () => {
  try {
    const response = await fetch("/api/calories-based-recipes", {
      method: "GET",
    });

    const data = await response.json();

    if (!data?.data) {
      return [];
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCaloriesBasedRecipe = async (id) => {
  try {
    const response = await fetch(`/api/calories-based-recipes/${id}`, {
      method: "GET",
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const saveCaloriesBasedRecipe = async (record) => {
  try {
    delete record._id;

    const response = await fetch("/api/calories-based-recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCaloriesBasedRecipe = async (id) => {
  try {
    const response = await fetch(`/api/calories-based-recipes/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getIngredientsBasedRecipes = async () => {
  try {
    const response = await fetch("/api/ingredients-based-recipes", {
      method: "GET",
    });

    const data = await response.json();

    if (!data?.data) {
      return [];
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const getIngredientsBasedRecipe = async (id) => {
  try {
    const response = await fetch(`/api/ingredients-based-recipes/${id}`, {
      method: "GET",
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const saveIngredientsBasedRecipe = async (record) => {
  try {
    delete record._id;

    const response = await fetch("/api/ingredients-based-recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(record),
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteIngredientsBasedRecipe = async (id) => {
  try {
    const response = await fetch(`/api/ingredients-based-recipes/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();

    if (!data?.data) {
      return null;
    }

    return data.data;
  } catch (error) {
    console.error(error);
  }
};

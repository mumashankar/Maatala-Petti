# Use a lightweight JDK base image
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the built JAR into the container
COPY target/*.jar app.jar

# Expose the port (Render sets PORT env variable)
EXPOSE 8080

# Run the JAR
ENTRYPOINT ["java","-jar","app.jar"]
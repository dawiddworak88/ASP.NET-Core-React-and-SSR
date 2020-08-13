#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["Project/AspNetCore/AspNetCore.csproj", "Project/AspNetCore/"]
COPY ["Infrastructure/AspNetCore.Prerendering/AspNetCore.Prerendering.csproj", "Infrastructure/AspNetCore.Prerendering/"]
RUN dotnet restore "Project/AspNetCore/AspNetCore.csproj"
COPY . .
WORKDIR "/src/Project/AspNetCore"
RUN dotnet build "AspNetCore.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "AspNetCore.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "AspNetCore.dll"]

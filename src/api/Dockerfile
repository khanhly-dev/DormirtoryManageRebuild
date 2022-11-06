#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

WORKDIR /app

# Copy csproj and restore as distinct layers
#COPY *.csproj ./
COPY *.sln .
COPY Dormitory.Admin.Api/*.csproj ./Dormitory.Admin.Api/
COPY Dormitory.Admin.Application/*.csproj ./Dormitory.Admin.Application/
COPY Dormitory.Core.Api/*.csproj ./Dormitory.Core.Api/
COPY Dormitory.Core.Application/*.csproj ./Dormitory.Core.Application/
COPY Dormitory.Student.Api/*.csproj ./Dormitory.Student.Api/
COPY Dormitory.Student.Application/*.csproj ./Dormitory.Student.Application/
COPY Dormitory.Domain/*.csproj ./Dormitory.Domain/
COPY Dormitory.Domain.Shared/*.csproj ./Dormitory.Domain.Shared/
COPY Dormitory.EntityFrameworkCore/*.csproj ./Dormitory.EntityFrameworkCore/


RUN dotnet restore

# Copy everything else and build
#COPY . ./
COPY Dormitory.Admin.Api/. ./Dormitory.Admin.Api/
COPY Dormitory.Admin.Application/. ./Dormitory.Admin.Application/
COPY Dormitory.Core.Api/. ./Dormitory.Core.Api/ 
COPY Dormitory.Core.Application/. ./Dormitory.Core.Application/ 
COPY Dormitory.Student.Api/. ./Dormitory.Student.Api/ 
COPY Dormitory.Student.Application/. ./Dormitory.Student.Application/ 
COPY Dormitory.Domain/. ./Dormitory.Domain/ 
COPY Dormitory.Domain.Shared/. ./Dormitory.Domain.Shared/ 
COPY Dormitory.EntityFrameworkCore/. ./Dormitory.EntityFrameworkCore/ 


WORKDIR /app/Dormitory.Admin.Api
RUN dotnet publish -c Release -o out
FROM mcr.microsoft.com/dotnet/sdk:6.0
WORKDIR /app
COPY --from=build-env /app/Dormitory.Admin.Api/out ./
EXPOSE 80
ENTRYPOINT ["dotnet", "Dormitory.Admin.Api.dll"]
